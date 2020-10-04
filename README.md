<h1 align="center">
  Pietro Di Marzo - Linktree Code Challenge
</h1>

Front End build for the Linktree Code Challenge based on the latest Gatsby starter project.
The project uses the following technologies:
- Typescript: static type-checking superset version of JavaScript
- React: Front End Framework
- Gatsby: open source framework for creating websites and apps

## 📖 Assumptions
- Minimum recommended node version ```v10.15.3```
- Testing is not included in the build due to time suggestion **(2-4 hours)**

## 🚀 Quick start

1.  **Install packages.**

    Once the repository has been cloned into your directory make sure to install packages

    ```sh
    yarn install
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd linktree/
    yarn start
    ```

## 🎓 Decision making highlights 
- I decided not to include testing due to a time suggestion on the project. I usually use JEST as a javascript testing library linked to Storybook.
- I mocked up an API response using JSON files in the `./src/data` folder.
- As I'm not familiar with styled-components I've decided to use a standard implementation of SCSS although I'm eager to get used to styled-components.
- Developing components such as images I've assumed the assets would be coming from an API endpoint.
- I decided to use Gatsby because it has been part of the conversation that I had with Mitch, apart from being one of the best static websites generator.
- I've tried to make component `expandable__list` generic as an accordion-type of module that can accept different types of content.
- Whilst use of the `audio` HTML module was mainly due to time constraints; it is undeniable how the simplicity of the module and the wide support from native browsers plays a big part in the choice of using this solution instead of a javascript based one. In a production environment, I would have spent more time to create a custom Javascript solution to enrich the style and the user experience as well as being able to provide an in-depth analytics report on its use.
- To simulate images being served as an API response, I've decided to use a service called Picsum which works as a placeholder image. Even if the images returned are in a JPG format, the use of vector format is highly recommended.