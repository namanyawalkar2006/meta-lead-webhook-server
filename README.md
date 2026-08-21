# Software Dev Intern Assignment - Meta Lead Webhook Backend

## Overview
This Express server handles Meta (Facebook) Lead Webhook verification (`GET /webhook`) and incoming lead event payload processing (`POST /webhook`).

## Features & Verification Logic
- **GET /webhook**: Validates `hub.verify_token` against `MY_VERIFY_TOKEN` and echoes `hub.challenge` with HTTP 200. Rejects invalid tokens with HTTP 403.
- **POST /webhook**: Accepts incoming lead notification payloads and responds with HTTP 200.

## Local Testing & Verification
Automated integration tests were implemented using **Jest** and **Supertest** to verify backend logic without reliance on external tunneling tools.

### Running Tests
1. Install dependencies:
   ```bash
   npm install
## System Architecture & Data Flow

```mermaid
graph TD
    A[Meta Lead Ads / Webhook Trigger] -->|GET /webhook Verification| B[Node.js Express Server]
    A -->|POST /webhook Lead Payload| B
    B -->|Check hub.verify_token| C{Valid Token?}
    C -->|Yes| D[Return 200 OK + hub.challenge]
    C -->|No| E[Return 403 Forbidden]
    B -->|Process Lead Event| F[Log Payload & Respond 200 OK]
