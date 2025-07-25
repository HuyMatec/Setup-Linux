# Cấu hình môi trường Ubuntu sau khi cài lại (đầy đủ từng bước)

## 1. Cập nhật hệ thống

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Cài các phần mềm cần thiết

```bash
sudo apt install gnome-tweaks gnome-shell-extensions gnome-shell-extension-manager dconf-editor -y
```

## 3. Sửa lỗi apt upgrade không nâng cấp được

```bash
sudo apt --fix-broken install
```

## 4. Cài theme, icon, extension Gnome:

- Sử dụng `gnome-tweaks` để chỉnh theme.
- Vào `Extension Manager` để cài:

  - Blur my Shell
  - Compiz alike magic lamp effect
  - Emoji Copy
  - User Themes
  - X11 Gestures
  - System Monitor (cần bật lại sau mỗi lần restart)

## 5. Cài đặt VS Code

### Thêm repo chính chủ để không phải tải file .deb

```bash
sudo apt install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list
sudo apt update
sudo apt install code
```

> Sau khi đã add repo, có thể cập nhật VS Code như mọi phần mềm Ubuntu:

```bash
sudo apt update && sudo apt upgrade -y
```

## 6. Mở file `.desktop` để chỉnh shortcut icon ứng dụng nếu cần

```bash
sudo nano /usr/share/applications/code.desktop
```

## 7. Cấu hình để khi click 2 lần vào icon ứng dụng (trên dock/panel) thì ứng dụng sẽ thu gọn như Windows:

```bash
gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'
```

## 8. Giao diện GNOME Extension báo: `Updates are available – will be updated on next login`

➡️ Bạn chỉ cần đăng xuất và đăng nhập lại hoặc restart để áp dụng cập nhật.

## 9. Cài đặt Git và GitHub

```bash
sudo apt-get install git
sudo add-apt-repository ppa:git-core/ppa
```

Cấu hình:

```bash
git config --global user.name "HuyMatec"
git config --global user.email "tranhoanghuy02.11.2003@gmail.com"
git config --global --list
```

### Lệnh lấy SSH Key

```bash
ssh-keygen -t rsa -b 4096
cat ~/.ssh/id_rsa.pub
```

### Clone repo cá nhân

```bash
git clone git@github.com:HuyMatec/Setup-Linux.git
```

## 10. Fix điều khiển độ sáng

### Pop!\_OS

```bash
sudo kernelstub -a "acpi_backlight=native"
```

### Ubuntu

```bash
sudo nano /etc/default/grub
# Thêm vào dòng GRUB_CMDLINE_LINUX: quiet splash pcie_aspm=force acpi_backlight=native
sudo update-grub
```

## 11. Cài đặt bàn phím tiếng Việt (IBus Bamboo)

```bash
sudo add-apt-repository ppa:bamboo-engine/ibus-bamboo
sudo apt-get update
sudo apt-get install ibus-bamboo
ibus restart
```

## 12. Cài đặt ZSH Shell và plugin

```bash
sudo apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Cấu hình Terminal:

- Preferences → đổi tên môi trường thành `ZSH_Environment`
- Tích vào: Run a custom command instead of my shell → `/usr/bin/zsh`

Cài plugin:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

```bash
chsh -s $(which zsh)
```

Cấu hình `.zshrc`:

```zsh
ZSH_THEME="powerlevel10k/powerlevel10k"
plugins=(git sudo history encode64 copypath zsh-autosuggestions zsh-syntax-highlighting)
```

## 13. Fish Shell

```bash
sudo apt-get install fish
chsh -s (command -s fish)
```

## 14. Cài curl & watchman

```bash
sudo apt-get install curl watchman
```

## 15. Cài đặt Fisher, NVM, fish_logo, tide:

```bash
curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
fisher install jorgebucaran/nvm.fish
fisher install laughedelic/fish_logo
fisher install IlanCosman/tide@v6
```

## 16. Cài đặt và thiết lập NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install v18.18.0
nvm use v18.18.0
set --universal nvm_default_version v18.18.0
nvm ls-remote
```

## 17. Cài đặt Yarn & Bun

```bash
npm i -g yarn
curl -fsSL https://bun.sh/install | bash
```

## 18. Cài đặt Android Studio

```bash
sudo add-apt-repository ppa:maarten-fonville/android-studio
sudo apt install android-studio -y
```

## 19. Cài đặt Flutter

```bash
sudo snap install flutter --classic
flutter doctor --android-licenses
```

Thêm vào `.zshrc` hoặc `config.fish`:

```bash
export PATH="$PATH:`pwd`/flutter/bin"
```

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 20. Cấu hình file `config.fish`

```fish
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
```

## 21. Cài đặt WhiteSur Theme

```bash
git clone https://github.com/vinceliuice/WhiteSur-gtk-theme.git
cd WhiteSur-gtk-theme/
./install.sh -t all -N glassy -s 220
sudo apt install gnome-tweaks
```

## 22. Lệnh Linux hữu ích

```bash
sudo dpkg --list | grep -i jdk
sudo apt-get remove --purge <name_version>
sudo apt-get autoremove
```

## 23. Cài file .deb thủ công

```bash
sudo dpkg -i <ten_file.deb>
```

## 24. Cài đặt Driver NVIDIA

```bash
nvidia-smi
sudo apt install nvidia-driver-545
```

## 25. Cài đặt Postman thủ công

```bash
tar -xzf postman-agent-0.4.17-linux-x64.tar.gz
sudo mkdir -p /opt/apps/
sudo mv Postman /opt/apps/
sudo ln -s /opt/apps/Postman/Postman /usr/local/bin/postman
```

Tạo launcher:

```bash
sudo nano /usr/share/applications/postman.desktop
```

```desktop
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=/usr/local/bin/postman %U
Terminal=false
Type=Application
Icon=/home/huymatec2003/.icons/Cupertino-Ventura/apps/128/postman.png
Categories=Development;
```

## 26. Cài đặt Flipper

Tải tại: [https://github.com/facebook/flipper/releases](https://github.com/facebook/flipper/releases)

```bash
sudo mv ~/Downloads/Flipper-linux /opt/flipper
```

Tạo icon:

```bash
sudo nano /usr/share/applications/flipper.desktop
```

```desktop
[Desktop Entry]
Name=Flipper
Comment=Platform for debugging mobile apps on iOS and Android.
Exec=/opt/flipper/flipper
Terminal=false
Type=Application
Icon=/home/huymatec2003/.icons/Cupertino-Ventura/apps/128/flipper.png
```

## 27. Fan Control cho Acer Nitro 5

```bash
git clone https://github.com/Jebaitedneko/Acer-Nitro-5-AN515-58-EC-Control-Linux
sudo bash nitrosense
```

Menu lệnh:

- `da`: Default Power + Auto Fan
- `pm`: Performance Power + Max Fan
- `pc 50`: Performance + Custom Fan 50%

## 28. Cài đặt Touchegg (Touchpad gesture)

```bash
sudo add-apt-repository ppa:touchegg/stable
sudo apt update
sudo apt install touchegg
systemctl status touchegg.service
```

## 29. Setup Starship trên Windows

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
choco install -y nodejs-lts openjdk11
choco install starship
```

Tạo file `Microsoft.PowerShell_profile.ps1` trong Documents\PowerShell:

```powershell
Invoke-Expression (&starship init powershell)
```

Tạo file `~/.config/starship.toml`:

```toml
[battery]
full_symbol = "🔋"
charging_symbol = "🔌"
discharging_symbol = "⚡"
[[battery.display]]
threshold = 100
style = "bold green"

[cmd_duration]
min_time = 10000
format = " took [$duration]($style)"

[directory]
truncation_length = 5
format = "[$path]($style)[$lock_symbol]($lock_style) "

[git_branch]
symbol = '🌱 '
truncation_length = 4
ignore_branches = ['master', 'main']

[git_commit]
commit_hash_length = 4
tag_symbol = '🔖 '

[git_status]
conflicted = '🏳'
ahead = '🏎💨'
behind = '😰'
diverged = '😵'
up_to_date = '✓'
untracked = '🤷'
stashed = '📦'
modified = '📝'
staged = '[++\($count\)](green)'
renamed = '👅'
deleted = '🗑'

[package]
format = 'via [🎁 $version](208 bold) '

[time]
disabled = false
use_12hr = false
format = '🕙 [\[ $time \]]($style) '
time_format = '%T'
utc_time_offset = 'local'

[nodejs]
format = 'via [🤖 $version](bold green) '
```

## 30. Lệnh shutdown / restart trong Windows

```bash
C:\Windows\System32\shutdown.exe -s -t 0
C:\Windows\System32\shutdown.exe -r -t 0
```

---

_Nếu bạn có thêm bước nào muốn lưu lại, mình sẽ bổ sung thêm vào đây._
