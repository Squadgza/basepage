# Authors

All team
 

# TODO LISt

- data 
  - replace dummy data with backend
  - refactor code (implement reducer etc)

- home page
  - give user option to select number of posts 
    ex. 5 /10 / 100 / infinite
    - if it is not infinite should be link (bar) to next posts
  - refactor code (implement reducer etc)
    - reducer based on a USER 

- USER
  - unauthorized users have only read mode
   no access to editing, adding and delete
  - Add edit delete for auth. USER
  - Read only for other Users Posts

_SUPER_USER
  - CAN DO EVERYTHING.  

## DATABASE
- User Table
- Post table


# User Table:
- name
- email
- paswword
<!-- - conformation -->
<!-- - resetpassword -->
# Post Table
-  different categories
-  foreign key for user
-  Post will have Title column, img, discription, price, location, created Date and time.
# Likes and Views:
- likes
- Foreign key for post.
- Number of views.[Get request for post, method to count]
- 
