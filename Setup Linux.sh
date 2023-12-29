SETUP GITHUB
sudo apt-get install git
sudo add-apt-repository ppa:git-core/ppa
git config --global user.name HuyMatec
git config --global user.email tranhoanghuy02.11.2003@gmail.com
git config --global --list

LỆNH LẤY SSH KEY
ssh-keygen -t rsa -b 4096
cat tên đường dẫn public

CÀI ĐẶT Setup-Linux.git
git clone git@github.com:HuyMatec/Setup-Linux.git

FIX CONTROL BRIGHTNESS Pop!_OS
sudo kernelstub -a "acpi_backlight=native"

FIX CONTROL BRIGHTNESS Ubuntu
sudo nano /etc/default/grub
quiet splash pcie_aspm=force acpi_backlight=native
sudo update-grub

CÀI ĐẶT BÀN PHÍM TIẾNG VIỆT CHO MÁY
sudo add-apt-repository ppa:bamboo-engine/ibus-bamboo
sudo apt-get update
sudo apt-get install ibus-bamboo
ibus restart

SETUP ZSH SHELL
sudo apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

BẮT ĐẦU CLONE CÁC GÓI
git clone https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

Đặt zsh làm mặc định
chsh -s $(which zsh)

SETUP MÔI TRƯỜNG ZSH SHELL TRONG FILE .zshrc
ZSH_THEME="powerlevel10k/powerlevel10k"
plugins=(git sudo history encode64 copypath zsh-autosuggestions zsh-syntax-highlighting)

Theo thứ tự chọn y y y y 3 1 2 4 1 1 2 1 4 1 2 2 2 n 1 y 

SETUP FISH SHELL
sudo apt-get install fish

Đặt làm mặc định
chsh -s (command -s fish)

CÀI ĐẶT CURL & WATCHMAN
sudo apt-get install curl
sudo apt-get install watchman
sudo apt update

CÀI ĐẶT FISHER NVM LOGO_FISH
curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
fisher install jorgebucaran/nvm.fish
fisher install laughedelic/fish_logo

SETUP FISH ICON
fisher install IlanCosman/tide@v6
Theo thứ tự chọn số 3 2 2 1 3 1 4 1 1 2 2 1

CÀI ĐẶT VÀ ĐẶT MẶC ĐỊNH NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm ls-remote
nvm install v18.18.0
nvm use v18.18.0
set --universal nvm_default_version v18.18.0

CÀI ĐẶT YARN GLOBAL TRÊN MÁY
npm i --global yarn

CÀI ĐẶT BUN TRÊN MÁY
curl -fsSL https://bun.sh/install | bash

CÀI ĐẶT ANDROID_STUDIO
sudo add-apt-repository ppa:maarten-fonville/android-studio
sudo apt install android-studio -y

CÀI ĐẶT FLUTTER 
sudo snap install flutter --classic
flutter doctor --android-licenses
export PATH="$PATH:`pwd`/flutter/bin" => thêm vào file .zshrc

Cài đặt xong Android Studio thì thêm environment cho file .zshrc
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

SETUP MÔI TRƯỜNG FISH SHELL TRONG FILE config.fish
sudo nano .config/fish/config.fish

fish_logo blue cyan green

if status is-interactive
    # Commands to run in interactive sessions can go here
end

function pokeshell
    cd /usr/local/bin/pokeshell
    npm start
end

# android-studio
set -gx ANDROID_HOME $HOME/Android/Sdk
set -x PATH $PATH $ANDROID_HOME/emulator
set -x PATH $PATH $ANDROID_HOME/platform-tools

# bun
set -gx BUN_INSTALL "$HOME/.bun"
set -gx PATH $BUN_INSTALL/bin $PATH

# flutter
set -gx FLUTTER_HOME "$HOME/flutter"
set -gx PATH $PATH $FLUTTER_HOME/bin

SETUP THEME
git clone https://github.com/vinceliuice/WhiteSur-gtk-theme.git
cd WhiteSur-gtk-theme/ && ls -lah && ./install.sh -t all -N glassy -s 220 && ls -lah *sh && sudo apt install gnome-tweaks

LỆNH LINUX
sudo dpkg --list | grep -i jdk
sudo apt-get remove --purge name_version
sudo apt-get autoremove

CÀI ĐẶT FILE CÓ ĐUÔI .deb
sudo dpkg -i <ten_file.deb>

CÀI ĐẶT DRIVER NVIDIA
nvidia-smi
sudo apt install nvidia-driver-545

CÀI ĐẶT POSTMAN
tar -xzf postman-agent-0.4.17-linux-x64.tar.gz
sudo mkdir -p /opt/apps/
sudo mv Postman /opt/apps/
sudo ln -s /opt/apps/Postman/Postman /usr/local/bin/postman
sudo nano /usr/share/applications/postman.desktop
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=/usr/local/bin/postman %U
Terminal=false
Type=Application
Icon=/home/huymatec2003/.icons/Cupertino-Ventura/apps/128/postman.png
Categories=Development;

CÀI ĐẶT FLIPPER
sudo mv ~/Downloads/flipper /opt/flipper
sudo nano /usr/share/applications/flipper.desktop
[Desktop Entry]
Name=Flipper
Comment=Platform for debugging mobile apps on iOS and Android.
Exec=/opt/flipper/flipper
Terminal=false
Type=Application
Icon=/home/huymatec2003/.icons/Cupertino-Ventura/apps/128/flipper.png

FAN CONTROL ACER
git clone https://github.com/Jebaitedneko/Acer-Nitro-5-AN515-58-EC-Control-Linux
sudo bash nitrosense
ENA: [w]rite to ec
PWR: [q]uiet [d]efault [p]erformance
FAN: [a]uto  [c]ustom  [m]ax
DBG: [r]ead from ec
DBG: [e]nergy data from intel_rapl
DBG: [n]vidia-powerd restart

MENU FAN OPTIONS
Default Power with Auto Fan: sudo bash nitrosense da
Performance Power with Max Fan: sudo bash nitrosense pm
Performance Power with Custom Fan at 50%: sudo bash nitrosense pc 50

CÀI ĐẶT TOUCHEGG 
Vào Extension Manager install X11 Gesture
sudo add-apt-repository ppa:touchegg/stable   
sudo apt update
sudo apt install touchegg
systemctl status touchegg.service