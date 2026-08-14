#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入项目根目录
cd "$(dirname "$0")"

# 初始化 git（如果还没有）
if [ ! -d .git ]; then
  git init
fi

# 添加所有文件
git add -A

# 提交
git commit -m 'deploy' || echo "Nothing to commit"

# 推送到 GitHub Pages 分支
git push -f git@github.com:iolinker/iolinker.com.git main:pages

echo "Deployed successfully!"
