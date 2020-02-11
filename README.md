# Petful

A pet adoption app built by Sophia Koeut and Wendy Bartos for Thinkful's Engineering Immersion Program.

## The project

Petful operates on a first-in, first-out basis. Given a queue of dogs and a queue of cats (on the backend), users adopt the first available pet. As a new adopter, add your name to the waiting list and watch as each available pet gets adopted. When it's your turn to adopt your pet, click the adopt button to dequeue that pet and complete the adoption process!

![Home Page](src/images/homepage.png "Home Page")
![Sign up for adoption](src/images/signup.png "Sign up for adoption")
![Waitlist](src/images/waitlist.png "Waitlist Page")
![Summary Page](src/images/summary.png "Summary Page")

## We'll do it live!

[Petful Live App](https://y-chi.now.sh/)

[Petful client (Github)](https://github.com/thinkful-ei-iguana/Wendy-Sophia-Petful-Client)

## Technology Used

Front-End: _ReactJS | CSS_

Back-End: _NodeJS | ExpressJS_

## API Documentation

| Method | Path               | Purpose                                                        |
| ------ | ------------------ | -------------------------------------------------------------- |
| GET    | /api/cats          | Get the first cat in the queue                                 |
| DELETE | /api/cats          | Dequeues the first cat in the queue                            |
| GET    | /api/cats/morecats | Reloads the cats in the queue when there are no more available |
| GET    | /api/cats/allcats  | Get all cats next in the queue                                 |
| GET    | /api/dogs          | Get the first dog in the queue                                 |
| DELETE | /api/dogs          | Dequeues the first dog in the queue                            |
| GET    | /api/dogs/moredogs | Reloads the dogs in the queue when there are no more available |
| GET    | /api/dogs/alldogs  | Get all dogs next in the queue                                 |
