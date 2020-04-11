#!/bin/bash
# Bash script that sends DELETE passed as the first argument and dislay body
curl -s "$1" -X DELETE
