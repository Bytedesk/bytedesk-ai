#!/bin/sh
# 添加权限 chmod +x start.sh
nohup python main.py > output.log 2>&1 &
