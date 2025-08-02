# Databases Used by Popular Websites

| Website     | Databases Used                                      | Advantages                                           | Challenges                                      |
|-------------|-----------------------------------------------------|------------------------------------------------------|-------------------------------------------------|
| **Facebook**  | MySQL, RocksDB, Cassandra                          | Highly scalable, optimized for fast reads           | Complex configuration and maintenance           |
| **Instagram** | PostgreSQL, Redis                                  | Reliable data storage with cache support            | Needs tuning for large-scale performance        |
| **Twitter**   | MySQL, Redis                                       | Quick data access and caching                       | Difficult to manage during heavy traffic        |
| **Netflix**   | Cassandra, MySQL, DynamoDB                         | Multi-region support, highly scalable               | Expensive and complex infrastructure            |
| **LinkedIn**  | Espresso (custom), Kafka, Voldemort               | Real-time data flow, event-driven architecture      | Not beginner-friendly, steep learning curve     |
| **YouTube**   | Bigtable, Spanner, MySQL                           | Handles large video and real-time data efficiently  | Uses closed-source, proprietary technologies    |
| **Flipkart**  | MySQL, HBase, Redis                                | Combines transactional operations with caching      | Complicated multi-database synchronization      |
| **Snapchat**  | Cassandra, Redis                                   | Fast delivery, scales with user growth              | High setup effort and maintenance               |
| **Spotify**   | Cassandra, Google Bigtable, PostgreSQL             | Supports millions of songs and user interactions    | Requires real-time streaming capabilities       |
| **Pinterest** | MySQL, Redis, HBase, Elasticsearch                 | Fast pin search and efficient image data storage    | Image-heavy → very large data volumes           |
