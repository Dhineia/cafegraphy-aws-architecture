








# Explanation: 
For my cloud architecture project called Cafégraphy, I built a simulated café website with a focus on AWS deployment, scalability, and multi-tier design. The frontend is hosted on Amazon S3, delivered globally through CloudFront CDN, and deployed automatically using GitHub Actions CI/CD.

I registered the domain through GoDaddy based on a real-world tutorial, and handled DNS routing with Route 53, where I created a public hosted zone and mapped an A record to my CloudFront distribution.

To simulate production-grade networking, I designed a custom VPC with subnets, route tables, and an internet gateway. For security, I configured Origin Access Identity (OAI) to restrict direct S3 access and integrated AWS WAF for threat protection at the CDN layer.

The project includes a visualized logic tier, where requests are routed through an Application Load Balancer, filtered by WAF, and handled by either EC2 backend instances or Lambda functions for payment processing and dynamic logic. I designed the backend to securely integrate with Stripe APIs, store order data in Amazon RDS, and use ElastiCache for session caching. I also integrated Amazon SES and SNS for sending email and SMS updates after successful checkout.

Even though some services like Stripe and GoDaddy were simulated due to budget limitations, I followed real-world architecture patterns. Finally, for observability, I enabled CloudFront access logs, stored them in S3, and used CloudWatch Alarms and Dashboards to monitor traffic, errors, and performance metrics.

This project demonstrates my ability to build secure, automated, and scalable cloud-native web apps using AWS. It reflects layered architecture thinking—from infrastructure to application logic and external integrations—even when working within a limited budget.
