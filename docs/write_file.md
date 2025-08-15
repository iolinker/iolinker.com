---
title: Write File
description: How to write text data to a local file.
meta:
  - name: keywords
    content: File Writing, Python File Writing, Low-code, AI Workflow, Process Engine
---

## Write File

Text data can be written to local files and viewed/maintained under the platform's [File Management] section.

<img src="./img/write_file_menu.png" alt="image-20241013095115813" style="zoom:50%;" />

Successfully written files can be viewed under **File Management** in the **Local File** section, where they can also be edited and updated.

<img src="/Users/shuwoom/Desktop/iolinker.com/docs/img/write_file.png" alt="image-20250729212126138" style="zoom:50%;" />

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/irENExYvvJM"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## Input

<img src="./img/write_file_input.png" alt="image-20241013095350884" style="zoom:50%;" />

### Filename

The name of the saved file, for example: `test.txt`.



### Encoding

Currently, UTF-8 encoding format is supported.

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/qaK4fCVEfmg"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

### Operations

- **Overwrite**:  
  If a file with the same name exists, its data will be overwritten. If no such file exists, a new file will be created.

- **Append**:  
  If a file with the same name exists, data will be added to the end of the file. If no such file exists, a new file will be created.

- **Delete File**:  
  Delete the specified file by name.



### Add Newline

Set whether to add a newline after each piece of data.



### Content

The text data content to be written.



## Output

Displays the number of bytes written.



