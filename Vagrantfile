# -*- mode: ruby -*-
# vi: set ft=ruby :

$install_docker = <<SCRIPT
echo "Installing docker-engine and docker-compose"
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
curl -fsSL https://get.docker.com/ | sh
# start docker
service docker start
# add vagrant user to docker group
sudo groupadd docker
sudo usermod -aG docker vagrant

#install docker-compose

curl -L https://github.com/docker/compose/releases/download/1.7.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
SCRIPT

$install_node_npm = <<SCRIPT
echo "Installing node and npm"
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.define "pgs-fe-gda-hackaton-host" do |config|
      config.vm.box = "ubuntu/trusty64"
      # config.vm.network :private_network, ip: "10.0.0.10"
      config.vm.network "forwarded_port", guest: 8000, host: 8001
      config.vm.network "forwarded_port", guest: 4000, host: 4001
      config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = "2048"
        vb.cpus = 2
      end
      config.vm.synced_folder "./", "/hackaton", id: "vagrant-root", type: "nfs"

      #install docker
      config.vm.provision "shell", inline: $install_docker
      #install node and npm
      config.vm.provision "shell", inline: $install_node_npm
  end
end