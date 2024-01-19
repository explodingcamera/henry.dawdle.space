#!/usr/bin/env bash

bun run build
rsync -avzP dist/ dawdle:~/test
