# AI Lead Scoring & Auto-Reply System

## Overview

This project automates inbound lead qualification using Google Sheets, Google Apps Script, and an LLM API.

The system:
- Analyzes incoming leads
- Scores buying intent (1–10)
- Assigns priority (Low / Medium / High)
- Categorizes the inquiry
- Generates a professional reply
- Writes structured output back into the spreadsheet

This helps businesses prioritize leads and respond faster.

---

## How It Works

1. New leads are added to a Google Sheet.
2. The Apps Script function scans unprocessed rows.
3. It sends lead data to an LLM API.
4. The AI returns structured JSON.
5. The script parses the JSON.
6. Results are written back into the sheet.
7. Lead status is marked as DONE.

---

## Technologies Used

- Google Sheets
- Google Apps Script
- LLM API (Groq / OpenAI-compatible endpoint)
- JSON structured output
- Prompt engineering
- Basic error handling & status tracking

---

## Features

- Automatic lead scoring (1–10)
- Priority classification
- Inquiry category detection
- Suggested professional email reply
- Timestamp logging
- Status tracking (PROCESSING / DONE / ERROR)

---

