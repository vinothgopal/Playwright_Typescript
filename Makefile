filename ?= .env

encrypt:
	@sops --encrypt --in-place --encrypted-regex 'APIKEY|TOKEN|PASSWORD' $(filename)
	@echo "File encrypted: $(filename) (regex: APIKEY|TOKEN|PASSWORD)"

decrypt:
	@sops --decrypt --in-place --encrypted-regex 'APIKEY|TOKEN|PASSWORD' $(filename)
	@echo "File decrypted: $(filename) (regex: APIKEY|TOKEN|PASSWORD)"

.PHONY: encrypt decrypt

#usage
#make encrypt filename=.ci/creds-pool/dev.env
#make decrypt filename=.ci/creds-pool/dev.env