# How to use docusaurous

## Install VSCode
- Go to [link](https://code.visualstudio.com/download)
- Download and Install
- You can open VSCode
## Install node
- Go to [link](https://nodejs.org/en/download/prebuilt-binaries) 
- Select options
	- v20.18.0 (LTS)
	- window
	- x86
- Download and Install
- Finally, you can run `npm -v` in your terminal; the version will be shown
## Clone template
- Go to [link](https://github.com/Dev4Geo/Docs)
- Click green button `<> Code`
- Download ZIP
- Unzip the folder. You will have `Docs/` folder.

## Open the project
- Open VSCode
- Press `F1` > Type `File: Open Folder` Press `Enter` > Select Folder > Open

## Start Project

### Basic VSCode
- `Ctrl + j` Toggle panel
- `Ctrl + b` Toggle File Explorer
### To open terminal
- Press `F1` > Type `Terminal: Focus Terminal` Press `Enter`
### Install Library
- Open terminal > Type `npm install` | Run this only for the first time
### Serve the project
- Open terminal > Type `npm start` | Run the server when you need to access `localhost:300`
- You can access `http://localhost:3000/docs/community` 
- [open localhost:3000](http://localhost:3000/docs/community)
- On browser, click `Community` on the sidebar | [url](http://localhost:3000/docs/community)
- On VSCode, open `community.md`. You will see like
```markdown
---
sidebar_position: 5
title: Community
# description: Website to show our projects
---

## Dev4Geo Community 

Join the Dev4Geo community and connect with fellow geologists and developers who share your passion for advancing geology with technology. Our community is active across several platforms, and we encourage you to participate in discussions, collaborate on projects, and stay up-to-date with the latest developments.

...
```
- change `## Dev4Geo Community` to `## Dev4Geo Community HaHa HaHa`
- On browser, Let check the changed header to `Dev4Geo Community HaHa HaHa` | [url](http://localhost:3000/docs/community)
- Now, you know how to edit the content
## Creating a new page
- New file `docs/new-page.md`
- Write the content on that file | you might copy these
```markdown
Welcome to the **Markdown Syntax Guide**. This document will showcase various Markdown features.

## 1. Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## 2. Emphasis

- *Italic* or _Italic_
- **Bold** or __Bold__
- ***Bold and Italic*** or ___Bold and Italic___

## 3. Lists

### Unordered Lists
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered Lists
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

## 4. Links and Images

[This is a link](https://example.com)

![This is an image](https://via.placeholder.com/150)

## 5. Blockquotes

> This is a blockquote.
>
> Another line of the same blockquote.

## 6. Code

### Inline code
Here is some `inline code`.

- On browser, Let check `new-page` on sidebar | [url](http://localhost:3000/docs/new-page)

#### WARNING 
Be careful about Header1 `# Header1`

- Try to add this to the top of `docs/new-page.md` file

```markdown
# Header1

Welcome to the **Markdown Syntax Guide**. This document will showcase various Markdown features.

...
```
- On browser, Let check the result `new-page` is changed to `Header1` | [url](http://localhost:3000/docs/new-page)

## Play Sidebar
### Position
- Try to add this to the top of `docs/new-page.md` file
```markdown
---
sidebar_position: 1
---

# Header1
```
- On browser, Header1 position is changed on the sidebar | [url](http://localhost:3000/docs/new-page)
### Title
- Try to add this to the top of `docs/new-page.md` file
```markdown
---
sidebar_position: 1
title: อบรมการปฐมพยาบาล
---

# Header1
```
- On browser, Header1 is changed to `อบรมการปฐมพยาบาล` on the sidebar | [url](http://localhost:3000/docs/new-page)

#### WARNING

Please named all files in English not Thai

```markdown
✅ nurse.md
❌ พยาบาล.md
```

## Play Menu
Let check `docs/showcases/` folder. There are 
```markdown
showcases/
	_category_.json
	showcase-web.md
```

On `_category_.json`, the content will be like
```json
{
  "label": "Showcases",
  "position": 2,
  "link": {
    "type": "generated-index"
  }
}
```
- `label` is for the folder
- `position` is for sidebar positon

On `showcase-web.md`, the content will be like
```markdown
---
sidebar_position: 1
# id: my-doc-id
title: Web 
description: Website to show our projects
# slug: /my-custom-url
---

## We are working on this project
```
Let go to [localhost:3000/docs/category/showcases](http://localhost:3000/docs/category/showcases), you will see the `description` -> `Website to show our projects`

### New Menu Item
- Create a file `docs/showcases/hello.md`
```markdown
---
sidebar_position: 2
title: Hi 
description: Desc Desc
---

This is hello file
```
- Let go to [localhost:3000/docs/category/showcases](http://localhost:3000/docs/category/showcases), you will see the new item

### Add Navbar
Check the file named `docusaurus.config.ts`. Find the word `themeConfig`.
This config contains `navbar` and `items` inside.
```js
{
  themeConfig: {
    image: "img/dev4geo_social_card.jpg",
    navbar: {
      title: "Dev4Geo",
      logo: {
        alt: "Logo",
        src: "img/dev4geo_logo.jpg",
      },
      items: [
        {
          to: "/docs/intro",
          label: "About",
          position: "left",
        },
        {
          to: "/docs/request-a-new-feature",
          label: "Request Feature",
          position: "left",
        },
      ],
    },
  },
};
```

You can add `New Nav` by
```js
items: [
  ...,
  {
    to: "/docs/new-nav",
    label: "New Nav",
    position: "left",
  }
]
```
Let try and enjoy content writing

### Add an image
1. Put your image to assets folder like `docs/assets/a.jpg`
2. Add this to the markdown content
```markdown
![img](./assets/a.jpg)
```