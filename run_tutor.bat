@echo off
title LingoFrench Server Launcher
echo ===================================================
echo   LingoFrench - Automated Local Server Launcher    
echo ===================================================
echo.
echo Starting local web server to enable microphone access...
echo (You can keep this window minimized while learning.)
echo.

:: 1. Check if Node.js/NPM is installed
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [Node.js Detected] Launching server using 'npx serve'...
    start /min "LingoFrench Server" cmd /c "npx -y serve -l 3000"
    timeout /t 3 >nul
    start http://localhost:3000
    echo Success! Opening http://localhost:3000 in your browser.
    exit
)

:: 2. Fallback: Check if Python is installed
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [Python Detected] Launching server using 'python -m http.server'...
    start /min "LingoFrench Server" cmd /c "python -m http.server 3000"
    timeout /t 2 >nul
    start http://localhost:3000
    echo Success! Opening http://localhost:3000 in your browser.
    exit
)

:: 3. If neither is found
echo ===================================================
echo   ERROR: Server Launcher Failed
echo ===================================================
echo Node.js and Python are missing from your system PATH.
echo.
echo Modern browsers require a local server to allow microphone access
echo (this is a security rule to prevent websites from secretly recording you).
echo.
echo To fix this:
echo 1. Install Node.js (from nodejs.org) OR Python (from python.org).
echo 2. Once installed, double-click this launcher again!
echo.
echo (In the meantime, you can still type your French answers in the chat
echo by opening index.html directly.)
echo.
pause
