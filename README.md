# redux-react-tutorial
In This Repo I Will Teach You Redux By Using It In React.JS By Scratch.

# What Is Redux?
  - Redux is a Predictable State Container For JavaScript Apps.
  - Run in different enviornments (Server, Client and Native).
  - It is tiny (2kb, including dependencies).
  
# What Is The Use Of Redux?
  - It prevents us from Props-Drilling. We set states Globally and can use it everywhere in any component.
  
# Structure Of Redux:-
  - Store (Hold States Of The Project)
  - Actions ( {TYPE: "LIKE_ARTICLE", ARTICLEID: "42"} )
  - Reducers (Normal Functions Which Get Actions)
  - Subscribe (Watch Component To Update With State Changes)
  
# Three Redux Principles
  - Our Whole State Data will only be stored in Redux Store
  - State Is Read-Only
  - If want to make changes in state use the pure functions (Reducers)
