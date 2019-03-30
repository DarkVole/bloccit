# bloccit

Project is in Development Phase - some files and commands are included for debug purposes

Bloccit is a Project within the Bloc Web Development Platform.  At present, it runs on the heroku production environment at:
https://darkvole-bloccit.herokuapp.com/

## Current Status

The current status of this project is in the following Gist: 

https://gist.github.com/DarkVole/79ba76eca81f9df5a21576b97b38c417

## Introduction

### Overview and Purpose

This checkpoint lays out the user stories and acceptance criteria you will use while building Bloccit: an application where users can create topics, posts, and comments as well as vote and favorite posts.

### Objectives

After this checkpoint, you should be able to:

* Understand the user stories and acceptance criteria for this project.
* Explain MVC.
* Discuss the principle of separation of concerns.

### Getting Started

During this section of the roadmap, you will build and deploy a Reddit-like web application we affectionately call Bloccit. Bloccit will have many features such as authentication, authorization, creating topics, posts, comments, favoriting, and voting amongst others. This checkpoint will cover foundational concepts and define the user stories that will guide the rest of this project.

### The Model-View-Controller Pattern (MVC)
As we've seen before, the MVC pattern allows for your application to have a separation of concerns, allowing specific sections of your application to be in charge of specific functionality.

### Model
The Model consists of the data structures needed to store information and the methods used to interface with the data layer of the application.

### View
The View controls everything a user sees and is handled by a view engine which takes dynamic content, replaces that content with placeholders inside of an HTML file, and then sends the final HTML to the client.

### Controller
The Controller handles incoming requests from the client. It will interact with the model to move data in and out of the database and the view.

### User Stories and Acceptance Criteria
We will implement the following user stories for Bloccit:

User Story: As a user, I want to know the name and purpose of this site so that I can decide whether I want to continue interacting with it.

#### Acceptance Criteria:

When I visit the site, I see the name of the website, a logo, and a brief list of features.
User Story: As a user, I want to be able to authenticate myself so that I can use my account to interact with content and others.

#### Acceptance Criteria:

When I visit the site, I see a link on the navigation bar to a signup page that leads to a form to create an account.

When I visit the site, I see a link on the navigation bar to a sign in page that leads to a form to enter my credentials for access.

While logged in, I see a link on the navigation bar to sign out which ends the current session

User Story: As an admin user, I want to be able to create topics so I can start a conversation around a specific issue.

#### Acceptance Criteria:

While logged in and visiting the topics page, I see a link to create a new topic which leads to a form to create a topic
User Story: As a user, I want to be able to read a topic so I can get more information about an issue.

#### Acceptance Criteria:

While logged in and visiting the topics page, I see a list of topics I can click on to read.
User Story: As a user, I want to be able to create a post on a given topic so I can contribute to a conversation.

#### Acceptance Criteria:

While logged in and visiting a topic page, I see a link to create a new post which leads to a form to create a post on the topic I'm visiting
User Story: As a user, I want to be able to read a post so I can get more information about an issue.

#### Acceptance Criteria:

While logged in and visiting a topic page, I see a list of posts I can click on to read more about an issue.
User Story: As a user, I want to be able to create a comment on a given post so I can voice my opinion on something.

#### Acceptance Criteria:

While logged in and visiting a post page, I see a link to create a new comment which leads to a form to create a comment for the post I'm visiting.
User Story: As a user, I want to be able to read a comment so I can get someone's point of view.

#### Acceptance Criteria:

While logged in and visiting a post page, I see a list of comments on the post if any exist.
User Story: As a user, I want to be able to vote on a post so I can quickly let others know how I feel about something.

#### Acceptance Criteria:

While logged in and looking at a post title, I see an upvote and downvote button that upon clicking on either, records the appropriate vote on my behalf.
User Story: As a user, I want to be able to favorite a post so I can keep track of the issues I care about most.

#### Acceptance Criteria:

While logged in and looking at a post, I see a favorite button that, upon clicking, registers the post as a favorite for me.

## Current Status

The current status of this project is in the following Gist: 

https://gist.github.com/DarkVole/79ba76eca81f9df5a21576b97b38c417






