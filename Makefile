clean:
	rm -rf docs; mkdir docs;
build: clean
	cargo web deploy --release -o ./docs
start:
	cargo web start --auto-reload