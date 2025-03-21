## Conditional Judgment

Determine the output as true or false based on the input and select the corresponding branch for execution. Supports the use of "and" and "or" to combine conditions, and allows for the use of variable expressions to make dynamic decisions at runtime.

![image-20241007184328803](./img/if_condition.png)



## Input

### Conditional Relationships

Complex conditional combinations can be formed using "and" and "or" relationships. If both "and" and "or" appear in a combination, the relationship is as follows: `CondX and CondY or CondZ...`

- **And**

  Returns true only if all conditions (Condition 1, Condition 2, ... Condition N) are true; otherwise, it returns false.

- **Or**

  Returns true if any one of the conditions is true; otherwise, it returns false if all conditions are false.



### Conditional Value Types

Currently, the following four types of value comparisons are supported: boolean, date and time, numeric, and string.

<img src="./img/if_input_paramter_type.png" alt="image-20241007182250995" style="zoom:50%;" />



Values 1 and 2 can be constants or variable expressions (dynamically retrieved at runtime).

#### Boolean Value

Determine whether Value 1 is true or false (Value 2 is not applicable here).

<img src="./img/if_input_boolean.png" alt="image-20241007183512956" style="zoom:50%;" />



#### Date and Time

Compare the relationship between Value 1 and Value 2 in terms of dates. You can compare strings in the format `yyyy-mm-dd hh:mm:ss` as well as Unix timestamp formats.

<img src="./img/if_input_date_time.png" alt="image-20241007183551996" style="zoom:50%;" />



#### Numeric

Compare the relationship between Value 1 and Value 2 in terms of size, including:

- Greater than
- Greater than or equal to
- Less than
- Less than or equal to
- Equal to
- Not equal to

<img src="./img/if_input_number.png" alt="image-20241007183630957" style="zoom: 50%;" />

#### String

Compare the relationship between Value 1 and Value 2 in terms of strings, including:

- Contains
- Does not contain
- Starts with...
- Does not start with...
- Ends with...
- Does not end with...
- Equal to
- Not equal to



<img src="./img/if_input_string.png" alt="image-20241007183709939" style="zoom:50%;" />

## Output

```
[true/false]
```

<img src="./img/if_output.png" alt="image-20241007183817574" style="zoom: 50%;" />

