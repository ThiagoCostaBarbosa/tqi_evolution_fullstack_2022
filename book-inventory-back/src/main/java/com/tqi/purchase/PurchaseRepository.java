package com.tqi.purchase;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PurchaseRepository extends JpaRepository<PurchaseEntity, UUID> {
}
