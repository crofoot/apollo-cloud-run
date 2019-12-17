# Apollo Server on Cloud Run 
> This is an example project of using type-graphql with Apollo server & Docker running on Google Cloud Run


### Steps
> Following [QuickStart Guide](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)

1. Enable Cloud Build and Cloud Run APIs
2. Install Cloud SDK
3. Clone project
4. Build Docker image `docker build -t apollo-cloud-run .` 
5. Tag Docker image  `docker tag <image-id> grc.io/PROJECT-ID/apollo-cloud-run-demo`
6. Docker Push to Cloud Run `docker push gcr.io/PROJECT-ID/apollo-cloud-run-demo`
