# Remix testing repo

## TODO

- [x] setup tailwind
- [x] setup shadcn/ui
- [x] setup darkmode
- [x] propse basic layout
- [x] use proper breadcrumbs
- [x] get theming working

### Research

- [ ] Streaming data (response from AI)

## Segments worked on

Segment | Sub-segment | Progress |
--------|-------------|--------- |
Candidates | List | / (implmented list) |
Candidates | Upload | - |
Candidates | Individual | - |
JobOffers | List | X (implemented list) |
JobOffers | New | X (implemented dialog form [doesn't work]) |
JobOffers | Individual | X |
JobOffers | Assessment | - |
JobOffers | Top Candidates | - |
JobOffers | Qualified/Unqualified | - |
JobOffers | Questionnaire | - |
Questions | New | - |
Questions | List | - |
Platform | New | - |
Platform | Launch | - |
*Prompts* | List | - |
*Prompts* | New | - |

## Data diagram

```mermaid
erDiagram
    ASSESSMENT {
        int id PK
        int match_score
        boolean is_qualified
        text summary
        int candidate_id FK
        int job_offer_id FK
    }
    CANDIDATE {
        int id PK
        string name
        text address
        string phone_number
        string email
        json education
        json work_experience
        text profile
        date created_at
        string image_url
        text image_raw
        image image
    }
    SKILLCANDIDATE {
        int id PK
        int candidate_id FK
        int skill_id FK
        int competence_level
    }
    JOBOFFER {
        int id PK
        string name
        text short_description
        text description
        date created_at
        string created_by
        string model_preference
        int min_salary
        int max_salary
    }
    SKILLJOBOFFER {
        int id PK
        int job_offer_id FK
        int skill_id FK
        int weight
    }
    SKILL {
        int id PK
        string name
        string type
    }

    ASSESSMENT ||--|| CANDIDATE : "candidate"
    ASSESSMENT ||--|| JOBOFFER : "job_offer"
    CANDIDATE ||--o{ SKILLCANDIDATE : "skills"
    SKILL ||--o{ SKILLCANDIDATE : ""
    JOBOFFER ||--o{ SKILLJOBOFFER : "skills"
    SKILL ||--o{ SKILLJOBOFFER : ""
```
