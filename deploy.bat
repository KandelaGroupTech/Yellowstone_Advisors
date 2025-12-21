@echo off
echo.
echo ===========================================
echo   Deploying Yellowstone Advisors to GitHub
echo ===========================================
echo.

:: Ensure we are in the right directory
cd /d "%~dp0"

:: Check for changes
git status

echo.
echo Adding changes...
git add .

set /p message="Enter commit message (or press enter for 'updates'): "
if "%message%"=="" set message=updates

echo.
echo Committing changes...
git commit -m "%message%"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ===========================================
echo   Deployment Complete!
echo ===========================================
echo.
pause
