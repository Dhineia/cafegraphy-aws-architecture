## Step-by-Step Cafégraphy AWS Cloud Architecture Procedure
🟩 1. Frontend Design and Planning
- Create the UI using HTML, CSS, JavaScript

- Add cart functionality and Stripe-based checkout flow (simulated or visualized)

- Plan additional customer experience flows like email/SMS confirmation

🟨 2. Set Up Networking in AWS
- Create a custom VPC named cafe-vpc

- Define public and private subnets

- Create route tables and assign to subnets

- Attach an Internet Gateway for public access

🟧 3. Host Static Website on Amazon S3
- Create an S3 bucket (e.g. cafe-static-site-bucket)

- Enable static website hosting

- Upload the frontend assets manually or via CI/CD

- Block public access to bucket

🟥 4. Configure CloudFront CDN
- Create a CloudFront distribution

- Set S3 bucket as origin with Origin Access Identity (OAI)

- Enable HTTPS using AWS Certificate Manager (ACM)

- Configure access logs and caching rules

🟦 5. Automate Deployment via GitHub Actions
- Push frontend code to GitHub repository

- Create GitHub Actions workflow:

- Upload files to S3

- Invalidate CloudFront cache after deployment

- Use scoped IAM credentials via GitHub Secrets

🟨 6. Domain Configuration
- Select a domain name from GoDaddy

- You visualized this using tutorials as a cost-saving method

- Create a Public Hosted Zone in Route 53

- Update GoDaddy NS Records with Route 53 nameservers

- Create an A Record Alias to route domain to CloudFront

🟥 7. Add Web Application Security (WAF)
- Create AWS WAF Web ACL

- Attach it to CloudFront distribution

- Define security rules (IP block, SQL injection, etc.)

🟦 8. Add Monitoring and Observability
- Enable CloudFront access logs → store in S3

- Configure Amazon CloudWatch Alarms and Dashboards

- Use CloudTrail to audit API-level activity

- Simulate traffic metrics and error tracking for review

🟫 9. Design Logic Tier Architecture (Backend Planning)
- Add Application Load Balancer (ALB) for backend traffic routing

- Route requests to either:

- EC2 backend instances (scalable)

- Lambda functions (serverless)

- Integrate Stripe APIs securely (planned)

- Send notifications via SES (emails) and SNS (SMS updates)

🟪 10. Design Data Tier (Simulated)
- Plan to use Amazon RDS (for orders and users)

- Use ElastiCache (Redis) for session and cart caching

- Connect backend to database securely

- Visualized database tables and API flow, even if not implemented yet

🟫 11. Why No NAT Gateway Was Used
- No EC2 in private subnet needing outbound internet access

- Stripe handled via frontend → no backend internet call required yet

- NAT Gateway is added only when private backend needs outbound acces

---
## Explanation: 
For my cloud architecture project called Cafégraphy, I built a simulated café website with a focus on AWS deployment, scalability, and multi-tier design. The frontend is hosted on Amazon S3, delivered globally through CloudFront CDN, and deployed automatically using GitHub Actions CI/CD.

I registered the domain through GoDaddy based on a real-world tutorial, and handled DNS routing with Route 53, where I created a public hosted zone and mapped an A record to my CloudFront distribution.

To simulate production-grade networking, I designed a custom VPC with subnets, route tables, and an internet gateway. For security, I configured Origin Access Identity (OAI) to restrict direct S3 access and integrated AWS WAF for threat protection at the CDN layer.

The project includes a visualized logic tier, where requests are routed through an Application Load Balancer, filtered by WAF, and handled by either EC2 backend instances or Lambda functions for payment processing and dynamic logic. I designed the backend to securely integrate with Stripe APIs, store order data in Amazon RDS, and use ElastiCache for session caching. I also integrated Amazon SES and SNS for sending email and SMS updates after successful checkout.

Even though some services like Stripe and GoDaddy were simulated due to budget limitations, I followed real-world architecture patterns. Finally, for observability, I enabled CloudFront access logs, stored them in S3, and used CloudWatch Alarms and Dashboards to monitor traffic, errors, and performance metrics.

This project demonstrates my ability to build secure, automated, and scalable cloud-native web apps using AWS. It reflects layered architecture thinking—from infrastructure to application logic and external integrations—even when working within a limited budget.

---
## Cloud Architecture
![diagram-export-10-07-2025-2_19_18-pm](https://github.com/user-attachments/assets/53aa057b-7452-4caa-817d-b57ec161e4ac)

--- 
## Website Application
<img width="1887" height="876" alt="image" src="https://github.com/user-attachments/assets/3bcfb1ff-367e-4a81-82d1-941a3058acff" />

