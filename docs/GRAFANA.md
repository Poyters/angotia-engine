# Grafana (analytics platform)

## Set up
- Pull Grafana Docker image: `docker run -d --name grafana -p 9091:3000 grafana/grafana`
- Now you can log in to [Grafana](http://localhost:9091) using `admin:admin` base credentials
- After that click on Add Data Source and select Prometheus
- As HTTP URL type link to Prometheus YML file, so: `http://172.17.0.2:9090`