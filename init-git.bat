@echo off
echo Ciscenje starog .git foldera...
rmdir /s /q .git 2>nul

echo Inicijaliziranje git repozitorija...
git init -b main
git config user.email "tomcoric@gmail.com"
git config user.name "Tomislav Coric"

echo Dodavanje datoteka...
git add .

echo Kreiranje prvog commita...
git commit -m "Initial commit - Udruga kulinara Dakovacki Kulin web stranica"

echo.
echo Git repozitorij uspjesno inicijaliziran!
echo Sljedeci korak: kreirati GitHub repo i dodati remote.
pause
