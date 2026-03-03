AI Lead Scoring & Auto-Reply System

Status

Working prototype — designed as a portfolio project demonstrating practical AI workflow automation for real-world business use cases.

This system showcases structured LLM integration, automated lead qualification logic, spreadsheet-based workflow orchestration, and state-controlled processing.

Overview

This project automates inbound lead qualification using:
 • Google Sheets
 • Google Apps Script
 • LLM API (OpenAI-compatible endpoint)

The system:
 • Analyzes incoming leads
 • Scores buying intent (1–10)
 • Assigns priority (Low / Medium / High)
 • Categorizes the inquiry
 • Generates a professional suggested reply
 • Writes structured output back into the spreadsheet
 • Tracks processing status and timestamps

It reduces manual review time and improves response prioritization.

Core Features
 • Automated lead scoring (1–10 scale)
 • Priority classification (Low / Medium / High)
 • Inquiry categorization (Sales, Support, Partnership, Spam, Other)
 • AI-generated professional reply suggestions
 • Structured JSON extraction from LLM response
 • Status-based workflow control (PROCESSING / DONE / ERROR)
 • Timestamp logging for processed leads
 • Basic parsing error handling

Technologies Used
 • Google Sheets
 • Google Apps Script (JavaScript runtime)
 • LLM API (OpenAI-compatible endpoint)
 • JSON parsing and structured outputs
 • Prompt engineering
 • Workflow state management logic
 • HTTP API integration (UrlFetchApp)

Purpose of This Project

This repository demonstrates:
 • Practical AI integration into real-world business workflows
 • Structured LLM response handling and validation
 • Spreadsheet-based automation architecture
 • End-to-end API communication with state control
 • System design thinking applied to workflow automation

Built as a portfolio-ready AI workflow automation project.

Example Input

{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "TechCorp",
  "budget": "$5,000",
  "message": "We are interested in automating our inbound customer requests and would like to know pricing and timeline."
}

Example Output

{
  "lead_score": 9,
  "priority": "High",
  "category": "Sales",
  "reasoning": "Clear buying intent with defined budget and project scope.",
  "suggested_reply": "Thank you for your inquiry. We'd be happy to discuss how we can automate your inbound requests. Could we schedule a short call this week?"
}
