-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema biblioteca-ISPC
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biblioteca-ISPC
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biblioteca-ISPC` DEFAULT CHARACTER SET utf8 ;
USE `biblioteca-ISPC` ;

-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`author` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`publisher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`publisher` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`genre` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `isbn` VARCHAR(100) NOT NULL,
  `title` VARCHAR(45) NULL,
  `ranking` INT NULL,
  `release_year` DATE NULL,
  `stock` INT NULL,
  `language` VARCHAR(45) NULL,
  `total_pages` INT NULL,
  `book_cover` VARCHAR(45) NOT NULL,
  `synopsis` VARCHAR(200) NULL,
  `format` VARCHAR(45) NULL,
  `author_id` INT NOT NULL,
  `publisher_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `isbn_UNIQUE` (`isbn` ASC) VISIBLE,
  INDEX `fk_book_author_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_book_publisher1_idx` (`publisher_id` ASC) VISIBLE,
  INDEX `fk_book_genre1_idx` (`genre_id` ASC) VISIBLE,
  CONSTRAINT `fk_book_author`
    FOREIGN KEY (`author_id`)
    REFERENCES `biblioteca-ISPC`.`author` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_publisher1`
    FOREIGN KEY (`publisher_id`)
    REFERENCES `biblioteca-ISPC`.`publisher` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `biblioteca-ISPC`.`genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`user` (
  `id` INT NOT NULL,
  `document` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `student` TINYINT NULL,
  `area_code` VARCHAR(45) NOT NULL,
  `province` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `biblioteca-ISPC`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`loan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`loan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `loan_date` DATE NOT NULL,
  `return_date` DATE NOT NULL,
  `active` TINYINT NOT NULL,
  `book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_loan_book1_idx` (`book_id` ASC) VISIBLE,
  INDEX `fk_loan_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_loan_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `biblioteca-ISPC`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_loan_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `biblioteca-ISPC`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca-ISPC`.`subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca-ISPC`.`subscription` (
  `id` INT NOT NULL,
  `due_date` DATE NOT NULL,
  `active` TINYINT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_subscription_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_subscription_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `biblioteca-ISPC`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
