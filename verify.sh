#!/bin/bash

SSO_ACCOUNT=$(aws sts get-caller-identity --query "Account" --profile sso)
#you can add a better check, but this is just an idea for quick check
if [ ${#SSO_ACCOUNT} -eq 14 ];  then 
echo "session still valid" ;
else 
echo "Seems like session expired"
# performed login here
fi