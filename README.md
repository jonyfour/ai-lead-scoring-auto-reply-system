# AI Lead Scoring & Auto-Reply System

## Status

Working prototype — designed as a portfolio project demonstrating practical AI workflow automation for real-world business use cases.

This system showcases structured LLM integration, automated lead qualification logic, spreadsheet-based workflow orchestration, and state-controlled processing.

---

## Overview

This project automates inbound lead qualification using:

- Google Sheets
- Google Apps Script
- LLM API (OpenAI-compatible endpoint)

The system:

- Analyzes incoming leads
- Scores buying intent (1–10)
- Assigns priority (Low / Medium / High)
- Categorizes the inquiry
- Generates a professional suggested reply
- Writes structured output back into the spreadsheet
- Tracks processing status and timestamps

It reduces manual review time and improves response prioritization.

---

## Problem It Solves

Businesses often receive inbound messages that must be:

- Reviewed manually
- Categorized
- Prioritized
- Replied to individually

This repetitive process slows down response time and increases the risk of missing high-intent leads.

This system automates that workflow using structured AI analysis.

---

## How It Works

1. New leads are added to a Google Sheet.
2. The Apps Script scans for rows without a completed status.
3. The script constructs a structured AI prompt.
4. Lead data is sent to an LLM API.
5. The model returns structured JSON.
6. The script extracts and parses the JSON safely.
7. The spreadsheet is updated with:
   - Lead score
   - Priority level
   - Category
   - Suggested reply
   - Reasoning
   - Timestamp
   - Status (PROCESSING / DONE / ERROR)

To ensure stability, the system processes one lead per execution cycle.

---

## Architecture Flow

User Input (Google Sheet)  
→ Apps Script Trigger  
→ Prompt Construction  
→ LLM API Call  
→ JSON Response Parsing  
→ Structured Data Written Back to Sheet  
→ Workflow Status Updated  

---

## Example Input and Output


```json
## Example Input
{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "TechCorp",
  "budget": "$5,000",
  "message": "We are interested in automating our inbound customer requests and would like to know pricing and timeline."
}

## Example Output
{
  "lead_score": 9,
  "priority": "High",
  "category": "Sales",
  "reasoning": "Clear buying intent with defined budget and project scope.",
  "suggested_reply": "Thank you for your inquiry. We'd be happy to discuss how we can automate your inbound requests. Could we schedule a short call this week?"
}
