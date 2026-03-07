---
title: Core CDIF Profiles
order: 3
---

CDIF is built around several core profiles that address the essential functions for implementing cross-domain FAIR principles. It provides a mechanism for publishing a core set of critical metadata, relying on:
- A content model for structuring information, based on various existing metadata schemes.
- A JSON-LD serialization for data exchange.
- Workflows for publishing CDIF metadata, making resources easily discoverable and indexable by search engines using standard web technologies.

The framework is based on a set of five core profiles:

1. **Discovery:** Supports basic resource discovery on the web using an implementation based on **Schema.org** and the **DCAT** RDF vocabulary.
2. **Enabling Data Access and Use:** Defines machine-actionable methods for defining and evaluating access and usage conditions, using policies expressed with the Open Digital Rights Language (**ODRL 2.2**) standard.
3. **Controlled Vocabularies:** Outlines best practices for the management and publication of controlled vocabularies and other semantic artifacts, ensuring consistency of approach to enable greater interoperability across domains.
4. **Data Integration:** Provides resources that facilitate automated data integration through detailed descriptions of the variables and structures of a wide range of data. Uses the **DDI-Cross Domain Interoperability (DDI-CDI)** specification for representing the conceptual, physical, and logical aspects of data.
5. **Universals:** Provides recommendations of ‘universal’ elements, including time, geography, and units of measurement, which are applicable across different domains for consistent interpretation and interoperability.
