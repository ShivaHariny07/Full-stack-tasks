##  File System Indexing, Memory Management, and Process Scheduling

###  1. File System Indexing

**Concept**: File system indexing is the method used by an operating system to locate and manage files on a storage device efficiently.

**Techniques**:
- **Single-Level Indexing**: Uses one index block per file.
- **Multi-Level Indexing**: Uses a hierarchy (e.g., inode in UNIX) to handle large files.
- **Indexed Allocation**: Each file has its own index block storing addresses of data blocks.
- **Hash-based Indexing**: Uses a hash table to quickly locate file metadata.

**Pros**:
- Faster file access.
- Easier retrieval of large files.

**Cons**:
- Extra space for index blocks.
- Slight overhead in maintaining index structure.

---

###  2. Memory Management

**Concept**: Memory management is the process of controlling and coordinating computer memory, assigning blocks to various running programs.

**Key Concepts**:
- **Paging**: Divides memory into fixed-size pages to eliminate fragmentation.
- **Segmentation**: Divides memory based on logical divisions like code, data, and stack.
- **Virtual Memory**: Uses disk as an extension of RAM for running large applications.
- **Swapping**: Moves processes between RAM and disk to free up memory.

**Goals**:
- Efficient use of memory.
- Isolation between processes.
- Fast access to data.

---

###  3. Process Scheduling

**Concept**: Process scheduling is the activity of the OS to manage the execution order of processes to maximize CPU efficiency.

**Types of Schedulers**:
- **Long-Term Scheduler**: Selects which processes should be brought into the ready queue.
- **Short-Term Scheduler (CPU Scheduler)**: Selects which ready process should execute next.
- **Medium-Term Scheduler**: Handles process swapping in/out of memory.

**Scheduling Algorithms**:
- **FCFS (First-Come-First-Served)**: Simple, non-preemptive.
- **SJF (Shortest Job First)**: Minimizes average wait time.
- **Round Robin**: Time-sharing system with fixed time quantum.
- **Priority Scheduling**: Executes processes based on priority.

**Goals**:
- Maximize CPU utilization.
- Minimize waiting and turnaround time.
- Ensure fairness among processes.
