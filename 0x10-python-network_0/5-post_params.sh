#!/bin/bash
# Bash script sends a POST, and displays the body of the response
curl -s "$1" -X POST -d "email=hr@holbertonschool.com&subject=I will always be here for PLD"
