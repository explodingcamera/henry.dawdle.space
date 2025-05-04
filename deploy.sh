#!/usr/bin/env bash

bun run build
rsync -avzP dist/ genoa:~/dawdle/sites/fszs3e8axm
