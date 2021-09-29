# Prometheus (monitoring service)

## Set up
- Checkout if u have installed Docker on your PC
- Download Prometheus Docker Image `docker pull prom/prometheus`
- Once it downloads you can see the `prom/prometheus` image using `docker image ls`
- Next, start Prometheus Docker container by running belowe starting command
- That's it! Now, you can see a [Prometheus panel](http://localhost:9090)

## Connecting to Goodrent server (by node-exporter, **Linux**)
- Download node_Exporter for Linux: `wget https://github.com/prometheus/node_exporter/releases/download/v1.0.0/node_exporter-1.1.0.linux-amd64.tar.gz`
- Unpack: `tar xvfz node_exporter-1.1.0.linux-amd64.tar.gz`
- Run node exporter by: `./node_exporter`
- Once the Node Exporter is installed and running, you can verify that metrics are being exported by cURLing the `/metrics` endpoint: `curl http://localhost:9100/metrics`


## Commands

```bash
# Start in development mode (Linux/Unix)
$ sudo docker run --network host -d --name prometheus -p 9090:9090 -v $PWD/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus --config.file=/etc/prometheus/prometheus.yml
```