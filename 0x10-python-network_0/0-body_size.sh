#!/bin/bash
# Bash script that takes in a URL, sends request and size
curl -sI $1 | grep Content-Length: | cut -d ' ' -f2
