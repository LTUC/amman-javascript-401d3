# LAB - React Testing and Deployment

**RESTy Phase 2:** Test and Deploy the RESTy API testing application

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Create a new repository for this project, called 'resty' and work in a branch called 'testing'

**NOTE** Starter code has been provided for you in the `/lab/starter-code` folder.

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In phase 2, we will be building on our working foundation, creating a full test suite and deploying our application into the cloud so that it is consumable for public access.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to be able to use the RESTy application from anywhere via a public web server
- As a user, I want to be assured the application will always operate to my expectations

## Technical Requirements / Note

### Write Unit and Behavioral Tests

- Write tests to cover the application, specifically the `<Form>` component
  - Does it properly store the users input into state?
  - Does it properly display the users input in the output area on form submit?
  - Does it properly clear the form/state after the form is submitted?
  - Do the method selectors/checkboxes obey your styling rules?

### Deploy the application

Deploy your application to multiple cloud providers. It's important to be able to compare and contrast their operations as well as to be familiar with their inner workings

#### Netlify - <netlify.com>

- Create a new app
- Connect the application to your github repository
- Setup Netlify to deploy from your master branch

#### AWS S3 Website - <https://s3.console.aws.amazon.com/s3/>

- Run the build script `npm run build` for your application
- Create a new bucket for your website at AWS in S3
- Do a manual deployment of the `build` folder contents into your bucket
- Set the permissions to public
- Enable Static Website Hosting

#### AWS Amplify - <https://us-west-2.console.aws.amazon.com/amplify/>

- Create a new app
- Connect the application to your github repository
- Setup Amplify to deploy from your master branch

#### GitHub Page

- Ensure that your `package.json` file a `homepage` setting
- Ensure that your `package.json` file has `predeploy` and `deploy` scripts
  - `predeploy` should run `npm run build`
  - `deploy` should invoke `gh-pages -d build`
- Include a correct `.yml` file in the `.github` folder of your repository
  - This should do an `npm install` followed by `npm run deploy`
- This should properly build the React application every time you check into master
- Turn on github pages, and point it at the `gh-pages` branch

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations

- Be sure and submit links to each of your deployments
