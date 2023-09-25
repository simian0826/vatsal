stop:
	@docker stop vatsal:1.0
build:
	@docker build . -t vatsal:1.0
run:
	@docker run -d -p 80:80 vatsal:1.0
