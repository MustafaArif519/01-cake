#!/bin/sh

set -e
ls -la
gunicorn -b :80  --chdir ./django_project django_project.wsgi:application