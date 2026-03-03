function analyzeLeads() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const lastRow = sheet.getLastRow();
  if (lastRow < 3) return;

  const apiKey = PropertiesService.getScriptProperties().getProperty("GROQ_API_KEY");
  if (!apiKey) throw new Error("API key not set.");

  for (let row = 3; row <= lastRow; row++) {

    const status = sheet.getRange(row, 12).getValue();
    if (status === "DONE" || status === "PROCESSING") continue;

    const name = sheet.getRange(row, 1).getValue();
    const email = sheet.getRange(row, 2).getValue();
    const company = sheet.getRange(row, 3).getValue();
    const message = sheet.getRange(row, 4).getValue();
    const budget = sheet.getRange(row, 5).getValue();

    if (!message) continue;

    sheet.getRange(row, 12).setValue("PROCESSING");

    const prompt = `
You are a business AI assistant.

Return ONLY valid JSON.

{
  "lead_score": number,
  "priority": "Low" | "Medium" | "High",
  "category": "Sales" | "Support" | "Partnership" | "Spam" | "Other",
  "reasoning": "short explanation",
  "suggested_reply": "professional email reply"
}

Lead Information:
Name: ${name}
Email: ${email}
Company: ${company}
Budget: ${budget}
Message:
${message}
`;

    const response = UrlFetchApp.fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "post",
        contentType: "application/json",
        headers: {
          Authorization: "Bearer " + apiKey
        },
        payload: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.3
        }),
        muteHttpExceptions: true
      }
    );

    try {
      const result = JSON.parse(response.getContentText());
      let aiText = result.choices[0].message.content.trim();

      const firstBrace = aiText.indexOf("{");
      const lastBrace = aiText.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1) {
        aiText = aiText.substring(firstBrace, lastBrace + 1);
      }

      const parsed = JSON.parse(aiText);

      sheet.getRange(row, 6).setValue(parsed.lead_score || "");
      sheet.getRange(row, 7).setValue(parsed.priority || "");
      sheet.getRange(row, 8).setValue(parsed.category || "");
      sheet.getRange(row, 9).setValue(parsed.suggested_reply || "");
      sheet.getRange(row, 10).setValue(parsed.reasoning || "");
      sheet.getRange(row, 11).setValue(new Date());
      sheet.getRange(row, 12).setValue("DONE");

    } catch (error) {
      sheet.getRange(row, 12).setValue("ERROR");
      Logger.log("Parsing error on row " + row);
    }

    break;
  }
}
