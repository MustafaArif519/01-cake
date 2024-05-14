import os
import subprocess

def upgrade_packages(requirements_file):
    with open(requirements_file, 'r') as file:
        lines = file.readlines()

    packages = [line.split('==')[0] for line in lines]

    for package in packages:
        subprocess.check_call(["pip", "install", "--upgrade", package])

if __name__ == "__main__":
    upgrade_packages("requirements.txt")