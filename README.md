# ethicattire_hackathon
![database diagram](database.png)

App Name -
    Ethic Attire
    
Problem - 
    Fast fashion. 
    Affordability & instant gratification comes before ethics and sustainable practices. 
    We treat clothing like disposable items when in reality, they should be an investment.

Solution - 
    An essential wardrobe consists of 32 pieces of clothing. When sourced sustainably, this wardrobe can last more than 10    years with the proper materials.
    We should incorporate timeless pieces as opposed to just trendy clothing.
    Cutting down on the environmental impact though changing consumer choices focused on their wardrobe.

- **Users**

  | Method | Endpoint     | Description           | Body Data                |
  | ------ | ------------ | --------------------- | ------------------------ |
  | GET    | `/users`     | Get all users         | n/a                      |
  | GET    | `/users/:id` | Get single user by id | n/a                      |
  | POST   | `/users/`    | Add new user          |  `username`              |
  | GET   | `/users/style/:id`| get style for user by id |                   |

- **Fabrics**

  | Method | Endpoint  | Description    | Body Data    |
  | ------ | --------- | -------------- | ------------ |
  | GET    | `/fabrics` | Get all fabrics | n/a          |
  | GET   | `/fabrics/:id` | Get fabric by id | `type` |


- **Items**

  | Method | Endpoint                 | Description                         | Body Data                                 |
  | ------ | ------------------------ | ----------------------------------- | ----------------------------------------- |
  | GET    | `/items`                 | Get all items                      | n/a                                       |
  | GET    | `/items/:id`             | Get single item by id               | n/a                                       |
  | POST   | `/items`                 | Add new item                        | `fabric_id`, `item_type`, `user_id` |
  | GET    | `/items/fabrics/:fabric_id` | Get all items for specific fabric_id | n/a                                       |
  | GET    | `/items/user/:user_id`   | Get all fabrics for specific user_id  | n/a                              |


