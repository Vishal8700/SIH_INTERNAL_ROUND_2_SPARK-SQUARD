# Project Setup:

This document contains instructions for setting up the frontend, backend, and Dockerized microservices in a full-stack application.

## Prerequisites

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **Python 3.8+**: Download and install from [Python official website](https://www.python.org/).
- **MongoDB**: Set up a local or cloud instance.
- **Git**: Install Git to clone repositories.
- **Docker**: Install Docker from [Docker official website](https://www.docker.com/).
- **Nginx**: Install Nginx for reverse proxying services.
- **ZeroTier**: Install ZeroTier for secure networking. [Download here](https://www.zerotier.com/download/).

---

## Frontend: MERN Stack

The frontend is built using the MERN stack (MongoDB, Express, React, Node.js).

### Installation Steps

1. Clone the repository
2. npm install
3. pip install -r requirements.txt
4. run all 18 image at docker
5. docker-compose build
6. docker-compose up -d


# 🌟 **Available Services and Ports** 🌟

| **Service**                           | **Port**  |
|---------------------------------------|-----------|
| ![Market Risk Predictor](https://img.shields.io/badge/-Market%20Risk%20Predictor-blue)  | `8000`    |
| ![Operational Risk Predictor](https://img.shields.io/badge/-Operational%20Risk%20Predictor-blue)  | `8001`    |
| ![Model Predictor + Document Intelligence](https://img.shields.io/badge/-Model%20Predictor%20%2B%20Document%20Intelligence-blue) | `8002`    |
| ![Melvis](https://img.shields.io/badge/-Melvis-orange)                     | `19530`   |
| ![Trade Predictor](https://img.shields.io/badge/-Trade%20Predictor-blue)   | `8003`    |
| ![Scam Prevention](https://img.shields.io/badge/-Scam%20Prevention-red)    | `8004`    |
| ![Loan Repayment Predictor](https://img.shields.io/badge/-Loan%20Repayment%20Predictor-green) | `8005`    |
| ![Default Risk Predictor](https://img.shields.io/badge/-Default%20Risk%20Predictor-green) | `8006`    |
| ![Value at Risk](https://img.shields.io/badge/-Value%20at%20Risk-purple)   | `8007`    |
| ![Bank SIH](https://img.shields.io/badge/-Bank%20SIH-cyan)                 | `8008`    |
| ![Bank FinRiskNew](https://img.shields.io/badge/-Bank%20FinRiskNew-cyan)   | `8009`    |
| ![Clients Risk](https://img.shields.io/badge/-Clients%20Risk-lightgrey)    | `8012`    |
| ![Responder](https://img.shields.io/badge/-Responder-yellow)               | `8099`    |
| ![Extractor](https://img.shields.io/badge/-Extractor-lightgreen)           | `8098`    |
| ![Imputer](https://img.shields.io/badge/-Imputer-lightgreen)               | `8097`    |
| ![Model Finder](https://img.shields.io/badge/-Model%20Finder-lightgreen)   | `8096`    |
| ![Internal Backend](https://img.shields.io/badge/-Internal%20Backend-lightblue) | `8095`    |
