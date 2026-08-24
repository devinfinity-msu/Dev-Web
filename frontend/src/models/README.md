# Models & Data Schema Contracts

This directory contains type/schema definitions and data mappers for Dev Infinity Web Application entities.

## Entities Summary

- **Event**: `id`, `title`, `description`, `category`, `type`, `status`, `date`, `time`, `venue`, `speaker`, `image`, `registrationUrl`
- **Project**: `id`, `title`, `description`, `category`, `image`, `techStack[]`, `contributors[]`, `githubUrl`, `demoUrl`
- **Blog**: `id`, `title`, `summary`, `category`, `author`, `publishedDate`, `readTime`, `coverImage`
- **LearningResource**: `id`, `category`, `icon`, `description`, `items[]`
- **Achievement**: `id`, `type`, `title`, `description`, `date`, `members`, `image`
- **TeamMember**: `id`, `section`, `name`, `role`, `year`, `branch`, `github`, `linkedin`, `avatar`
- **Certificate**: `id`, `recipientName`, `eventName`, `issueDate`, `verificationStatus`
