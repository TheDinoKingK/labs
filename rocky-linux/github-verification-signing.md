Thought it would be helpful to log this.
Was trying to follow these offical github guides to setup commit verification on my rocky server:  
https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits  
https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key

1. gpg cli was already installed on my rocky linux 9 server, so I didn't need todo anything for that unlike on my windows system :D
2. I followed what the "generating a new gpg key" guide stated after that and copied the same info I used for my main windows system
3. printed out the full gpg key with ```gpg --armor --export [key id]```, and copied the full key into my github account as normal.
4. setup the user.signingKey to the gpg key cause I forgot to
5. I had to use ```export GPG_TTY=$(tty)``` to fix the ```gpg signing failed: inappropriate ioctl for device``` Error,  this was because the passphrase dialogue could not run properly (I assume because of my ssh connection to the server), so this fixes it Ig.

Yeah that was about it
I remember having to go through some hoops to setup the original repo connection with this lab because it was private but I never documented that sadly, maybe I'll do It when that happens again.