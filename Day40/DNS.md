# DNS Record Types – Theory

The Domain Name System (DNS) is like the phonebook of the internet. It translates human-friendly domain names (e.g., `example.com`) into machine-readable IP addresses (e.g., `192.0.2.1`). DNS uses different types of records to provide specific instructions about how a domain should work.

---

## 1. A Record (Address Record)
- Maps a domain name to an **IPv4** address.
- Most common DNS record used to point a website to a hosting server.

**Example:**
example.com → 192.0.2.1


---

## 2. AAAA Record
- Similar to the A record but used for **IPv6** addresses.

**Example:**
example.com → 2001:db8::1

---

## 3. CNAME Record (Canonical Name)
- Creates an alias or nickname for another domain name.
- Commonly used for subdomains like `www`.

**Example:**
www.example.com → example.com

---

## 4. MX Record (Mail Exchange)
- Defines the mail servers responsible for receiving emails for the domain.
- Each record has a **priority** number (lower number = higher priority).

**Example:**
example.com → mail1.example.com (priority 10)


---

## 5. TXT Record (Text Record)
- Stores text-based information for various purposes.
- Commonly used for:
  - Email security (e.g., SPF, DKIM)
  - Domain ownership verification

**Example:**
v=spf1 include:_spf.google.com ~all


---

## 6. NS Record (Name Server)
- Specifies which name servers are authoritative for a domain.
- These servers store the actual DNS records.

**Example:**
example.com → ns1.hostingprovider.com


---

## 7. SRV Record (Service Record)
- Defines the location (hostname and port) of specific services.
- Used in applications like **VoIP** or **instant messaging**.

**Example:**
_sip._tcp.example.com → sipserver.example.com

---

## 8. PTR Record (Pointer Record)
- Used for **reverse DNS lookups**.
- Maps an **IP address** back to a **domain name**.

**Example:**
192.0.2.1 → example.com

---

## 9. SOA Record (Start of Authority)
- Provides **administrative information** about a domain's DNS zone.
- Includes:
  - Primary name server
  - Contact email
  - Refresh rate for DNS caching

---

## 10. CAA Record (Certification Authority Authorization)
- Defines which **certificate authorities (CAs)** are allowed to issue SSL/TLS certificates for the domain.
- Helps prevent unauthorized certificate issuance.

**Example:**
example.com → 0 issue "letsencrypt.org"

---

## 🔁 Summary Table

| Record | Purpose                         |
|--------|---------------------------------|
| A/AAAA | Point domains to IP addresses   |
| CNAME  | Alias for another domain        |
| MX     | Email servers                   |
| TXT    | Verification and policies       |
| NS     | Authoritative DNS servers       |
| SRV    | Service locations               |
| PTR    | Reverse DNS lookups             |
| SOA    | Admin info for DNS zone         |
| CAA    | Controls SSL certificate issuers|
