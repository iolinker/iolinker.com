## Indroduction

Same function as [Form Trigger], the only difference is that one is used to trigger workflow execution at the starting node, and the other can be used as a form to interact with users in the middle of the process.



<img src="./img/form-1.png" alt="image-20230823230046236" style="zoom:67%;" />

**Remarks**: When using form, you also need to save the workflow first to generate a workflow id, which is used to associate with the form.



## Configure [Members]

Members with permission to fill out the form.



## Design form

Click [Edit Form] jump to form editor.



![image-20230823231203312](./img/form-2.png)

After saving form, you can click the **[Preview]** button to view the actual  effect.

![image-20230823231549253](./img/form-3.png)

## Submit form

Let's try to debug the workflow and create a form instance.

> Debug

![image-20230823231736425](./img/form-4.png)

And go to [User Task>Form] page , you can see the form link

![image-20230823231858070](./img/form-5.png)

> Submit

Submit the form instance and finished the execution.

![image-20230823232016738](./img/form-6.png)

> Result

Back to the workflow editor, you can get the output of the submitted form instance.

![image-20230823232132794](./img/form-7.png)