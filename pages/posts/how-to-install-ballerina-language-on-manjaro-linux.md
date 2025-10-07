---
title: How to Install Ballerina Lang on Manjaro Linux
date: 2025/10/07
description: A step-by-step guide to manually install the Ballerina programming language on Manjaro Linux, including setting up environment variables for a smooth development experience.
tag: Ballerina, Manjaro, Linux, Installation, Programming
author: Mayura Andrew
---

# How to Install Ballerina Language on Manjaro Linux

![Knowlihub](/images/ballerina-logo.svg)

[Ballerina](https://ballerina.io) is a modern programming language designed for cloud-era application development. While Manjaro users can use the AUR, installing Ballerina manually from the official binary zip gives you more control and ensures you always get the latest release.

## Prerequisite Software

![Java](/images/java-version.png)

Before installing Ballerina, ensure your system has the following software installed:

- **Java Development Kit (JDK):** Ballerina requires a Java runtime environment to run. Installing OpenJDK (version 11 or later) is recommended. You can install it on Manjaro using:
  ```
  sudo pacman -S jdk-openjdk
  ```
- **Unzip Utility:** To extract the downloaded Ballerina zip file, ensure `unzip` is installed:
  ```
  sudo pacman -S unzip
  ```
- **A Compatible Shell:** Bash or Zsh shell to configure environment variables.

Setting the `JAVA_HOME` environment variable correctly is essential for Ballerina to locate the Java runtime.

With these prerequisites in place, you can proceed with downloading and installing Ballerina on your Manjaro system.

### Step 1: Download the Ballerina Binary

Go to the [official Ballerina downloads page](https://ballerina.io/downloads/installation-options/) and download the latest Linux `.zip` distribution.

### Step 2: Extract the Zip File

Open your terminal and navigate to your Downloads folder. Extract the zip file:
```
unzip ballerina-*.zip
```

### Step 3: Move the Extracted Folder

Move the extracted folder to a system location, such as `/usr/lib/ballerina`:
```
sudo mv ballerina-* /usr/lib/ballerina
```

### Step 4: Set Up Environment Variables

Add Ballerina to your PATH and set the JAVA_HOME variable. Edit your shell config file (`~/.bashrc` or `~/.zshrc`):
```
export PATH=$PATH:/usr/lib/ballerina/bin
export JAVA_HOME=/usr/lib/jvm/default
export PATH=$JAVA_HOME/bin:$PATH
```

To edit your shell config file, use the following command to open it in a text editor from your home directory:

For Bash:
```
cd ~
nano .bashrc
```

For Zsh:
```
cd ~
nano .zshrc
```

This will open the file in the `nano` editor, allowing you to add the required environment variable lines. After saving, reload your shell with:
```
source ~/.bashrc
```
or
```
source ~/.zshrc
```

### Step 5: Verify the Installation

Check that Ballerina is installed and JAVA_HOME is set:
```
bal version
```

#### output

![output](/images/ballerina-cli-version.png)
If the version is displayed, you are ready to start building with Ballerina!


***
