#!/bin/bash
export PYTHONPATH="/opt/graphite/lib/:/opt/graphite/webapp/"
pip install --no-binary=:all: https://github.com/graphite-project/whisper/tarball/1.0.1
pip install --no-binary=:all: https://github.com/graphite-project/carbon/tarball/1.0.1
pip install --no-binary=:all: https://github.com/graphite-project/graphite-web/tarball/1.0.1
