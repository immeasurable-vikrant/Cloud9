# Cloud9 - making the web faster

## Architecture:
    There are 3 services we've made:
    - upload service : upload the user's code to vercel system
    - deployment service : build (html/css/js) and deploy 
    - request handler service 

## 1. Upload Service:
    Upload service is nothing but a backend server which needs to take a github url as an input and copy over all the contents of the github repo into the vercel systems.
                                    ------------> Github 
                                    |           /
                                    |          /
                                    |         /
                                    |        /
    github url  --------------> "UPLOAD SERVICE"
                                    |       \
                                    |        \
                                    |         \
                                    |          \
                                    -----------> S3 (Object Storage)