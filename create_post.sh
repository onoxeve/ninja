#!/bin/bash

prefix="\033[0;32m[SETUP]"
suffix="\033[0;39m"

echo "${prefix}Create Posts Dir${suffix}"

time=$1
title=$2
post_dir="src/content/posts/${time}___${title}"

mkdir $post_dir
cd $post_dir
touch index.md
echo "---" >> index.md
echo "title:" >> index.md
echo "cover:" >> index.md
echo "---" >> index.md
